import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порезвиться: PerfectVerb = {
  name: Word('порезвиться', 6),
  singular1stPerson: Word('порезвлюсь', 7),
  singular2ndPerson: Word('порезвишься', 6),
  singular3rdPerson: Word('порезвится', 6),
  plural1stPerson: Word('порезвимся', 6),
  plural2ndPerson: Word('порезвитесь', 6),
  plural3rdPerson: Word('порезвятся', 6),
  masculinePast: Word('порезвился', 6),
  femininePast: Word('порезвилась', 6),
  neuterPast: Word('порезвилось', 6),
  pluralPast: Word('порезвились', 6),
  imperativeInformal: Word('порезвись', 6),
  imperativeFormal: Word('порезвитесь', 6),
  imperfect: [],
};

perfectVerbs.set(порезвиться.name.text, порезвиться);

export { порезвиться };