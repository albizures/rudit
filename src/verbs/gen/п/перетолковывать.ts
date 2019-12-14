import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетолковывать: PerfectVerb = {
  name: Word('перетолковывать', 8),
  singular1stPerson: Word('перетолковываю', 8),
  singular2ndPerson: Word('перетолковываешь', 8),
  singular3rdPerson: Word('перетолковывает', 8),
  plural1stPerson: Word('перетолковываем', 8),
  plural2ndPerson: Word('перетолковываете', 8),
  plural3rdPerson: Word('перетолковывают', 8),
  masculinePast: Word('перетолковывал', 8),
  femininePast: Word('перетолковывала', 8),
  neuterPast: Word('перетолковывало', 8),
  pluralPast: Word('перетолковывали', 8),
  imperativeInformal: Word('перетолковывай', 8),
  imperativeFormal: Word('перетолковывайте', 8),
  imperfect: [],
};

perfectVerbs.set(перетолковывать.name.text, перетолковывать);

export { перетолковывать };