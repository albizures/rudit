import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрузиться: PerfectVerb = {
  name: Word('погрузиться', 6),
  singular1stPerson: Word('погружусь', 6),
  singular2ndPerson: Word('погрузишься', 6),
  singular3rdPerson: Word('погрузится', 6),
  plural1stPerson: Word('погрузимся', 6),
  plural2ndPerson: Word('погрузитесь', 6),
  plural3rdPerson: Word('погрузятся', 6),
  masculinePast: Word('погрузился', 6),
  femininePast: Word('погрузилась', 6),
  neuterPast: Word('погрузилось', 6),
  pluralPast: Word('погрузились', 6),
  imperativeInformal: Word('погрузись', 6),
  imperativeFormal: Word('погрузитесь', 6),
  imperfect: [],
};

perfectVerbs.set(погрузиться.name.text, погрузиться);

export { погрузиться };