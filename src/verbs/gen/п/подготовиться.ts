import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготовиться: PerfectVerb = {
  name: Word('подготовиться', 6),
  singular1stPerson: Word('подготовлюсь', 6),
  singular2ndPerson: Word('подготовишься', 6),
  singular3rdPerson: Word('подготовится', 6),
  plural1stPerson: Word('подготовимся', 6),
  plural2ndPerson: Word('подготовитесь', 6),
  plural3rdPerson: Word('подготовятся', 6),
  masculinePast: Word('подготовился', 6),
  femininePast: Word('подготовилась', 6),
  neuterPast: Word('подготовилось', 6),
  pluralPast: Word('подготовились', 6),
  imperativeInformal: Word('подготовься', 6),
  imperativeFormal: Word('подготовьтесь', 6),
  imperfect: ['готовиться'],
};

perfectVerbs.set(подготовиться.name.text, подготовиться);

export { подготовиться };