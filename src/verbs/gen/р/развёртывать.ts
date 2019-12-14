import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развёртывать: PerfectVerb = {
  name: Word('развёртывать', 4),
  singular1stPerson: Word('развёртываю', 4),
  singular2ndPerson: Word('развёртываешь', 4),
  singular3rdPerson: Word('развёртывает', 4),
  plural1stPerson: Word('развёртываем', 4),
  plural2ndPerson: Word('развёртываете', 4),
  plural3rdPerson: Word('развёртывают', 4),
  masculinePast: Word('развёртывал', 4),
  femininePast: Word('развёртывала', 4),
  neuterPast: Word('развёртывало', 4),
  pluralPast: Word('развёртывали', 4),
  imperativeInformal: Word('развёртывай', 4),
  imperativeFormal: Word('развёртывайте', 4),
  imperfect: [],
};

perfectVerbs.set(развёртывать.name.text, развёртывать);

export { развёртывать };