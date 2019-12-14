import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рядиться: PerfectVerb = {
  name: Word('рядиться', 3),
  singular1stPerson: Word('ряжусь', 3),
  singular2ndPerson: Word('рядишься', 1),
  singular3rdPerson: Word('рядится', 1),
  plural1stPerson: Word('рядимся', 1),
  plural2ndPerson: Word('рядитесь', 1),
  plural3rdPerson: Word('рядятся', 1),
  masculinePast: Word('рядился', 3),
  femininePast: Word('рядилась', 3),
  neuterPast: Word('рядилось', 3),
  pluralPast: Word('рядились', 3),
  imperativeInformal: Word('рядись', 3),
  imperativeFormal: Word('рядитесь', 3),
  imperfect: [],
};

perfectVerbs.set(рядиться.name.text, рядиться);

export { рядиться };