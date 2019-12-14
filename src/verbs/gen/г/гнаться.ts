import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнаться: PerfectVerb = {
  name: Word('гнаться', 2),
  singular1stPerson: Word('гонюсь', 3),
  singular2ndPerson: Word('гонишься', 1),
  singular3rdPerson: Word('гонится', 1),
  plural1stPerson: Word('гонимся', 1),
  plural2ndPerson: Word('гонитесь', 1),
  plural3rdPerson: Word('гонятся', 1),
  masculinePast: Word('гнался', 2),
  femininePast: Word('гналась', 4),
  neuterPast: Word('гналось//гнало'сь', 2),
  pluralPast: Word('гнались//гнали'сь', 2),
  imperativeInformal: Word('гонись', 3),
  imperativeFormal: Word('гонитесь', 3),
  imperfect: [],
};

perfectVerbs.set(гнаться.name.text, гнаться);

export { гнаться };