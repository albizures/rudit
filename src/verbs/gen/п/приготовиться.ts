import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приготовиться: PerfectVerb = {
  name: Word('приготовиться', 6),
  singular1stPerson: Word('приготовлюсь', 6),
  singular2ndPerson: Word('приготовишься', 6),
  singular3rdPerson: Word('приготовится', 6),
  plural1stPerson: Word('приготовимся', 6),
  plural2ndPerson: Word('приготовитесь', 6),
  plural3rdPerson: Word('приготовятся', 6),
  masculinePast: Word('приготовился', 6),
  femininePast: Word('приготовилась', 6),
  neuterPast: Word('приготовилось', 6),
  pluralPast: Word('приготовились', 6),
  imperativeInformal: Word('приготовься', 6),
  imperativeFormal: Word('приготовьтесь', 6),
  imperfect: ['готовиться'],
};

perfectVerbs.set(приготовиться.name.text, приготовиться);

export { приготовиться };