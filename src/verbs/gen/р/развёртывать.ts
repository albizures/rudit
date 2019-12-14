import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развёртывать: PerfectVerb = {
  name: Word('развёртывать', 1),
  singular1stPerson: Word('развёртываю', 1),
  singular2ndPerson: Word('развёртываешь', 1),
  singular3rdPerson: Word('развёртывает', 1),
  plural1stPerson: Word('развёртываем', 1),
  plural2ndPerson: Word('развёртываете', 1),
  plural3rdPerson: Word('развёртывают', 1),
  masculinePast: Word('развёртывал', 1),
  femininePast: Word('развёртывала', 1),
  neuterPast: Word('развёртывало', 1),
  pluralPast: Word('развёртывали', 1),
  imperativeInformal: Word('развёртывай', 1),
  imperativeFormal: Word('развёртывайте', 1),
  imperfect: [],
};

perfectVerbs.set(развёртывать.name.text, развёртывать);

export { развёртывать };