import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угнаться: PerfectVerb = {
  name: Word('угнаться', 3),
  singular1stPerson: Word('угонюсь', 4),
  singular2ndPerson: Word('угонишься', 2),
  singular3rdPerson: Word('угонится', 2),
  plural1stPerson: Word('угонимся', 2),
  plural2ndPerson: Word('угонитесь', 2),
  plural3rdPerson: Word('угонятся', 2),
  masculinePast: Word('угнался', 3),
  femininePast: Word('угналась', 5),
  neuterPast: Word('угналось//угнало'сь', 3),
  pluralPast: Word('угнались//угнали'сь', 3),
  imperativeInformal: Word('угонись', 4),
  imperativeFormal: Word('угонитесь', 4),
  imperfect: [],
};

perfectVerbs.set(угнаться.name.text, угнаться);

export { угнаться };