import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const готовиться: PerfectVerb = {
  name: Word('готовиться', 3),
  singular1stPerson: Word('готовлюсь', 3),
  singular2ndPerson: Word('готовишься', 3),
  singular3rdPerson: Word('готовится', 3),
  plural1stPerson: Word('готовимся', 3),
  plural2ndPerson: Word('готовитесь', 3),
  plural3rdPerson: Word('готовятся', 3),
  masculinePast: Word('готовился', 3),
  femininePast: Word('готовилась', 3),
  neuterPast: Word('готовилось', 3),
  pluralPast: Word('готовились', 3),
  imperativeInformal: Word('готовься', 3),
  imperativeFormal: Word('готовьтесь', 3),
  imperfect: ['подготовиться','приготовиться'],
};

perfectVerbs.set(готовиться.name.text, готовиться);

export { готовиться };