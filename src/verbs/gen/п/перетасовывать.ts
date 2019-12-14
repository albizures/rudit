import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетасовывать: PerfectVerb = {
  name: Word('перетасовывать', 7),
  singular1stPerson: Word('перетасовываю', 7),
  singular2ndPerson: Word('перетасовываешь', 7),
  singular3rdPerson: Word('перетасовывает', 7),
  plural1stPerson: Word('перетасовываем', 7),
  plural2ndPerson: Word('перетасовываете', 7),
  plural3rdPerson: Word('перетасовывают', 7),
  masculinePast: Word('перетасовывал', 7),
  femininePast: Word('перетасовывала', 7),
  neuterPast: Word('перетасовывало', 7),
  pluralPast: Word('перетасовывали', 7),
  imperativeInformal: Word('перетасовывай', 7),
  imperativeFormal: Word('перетасовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перетасовывать.name.text, перетасовывать);

export { перетасовывать };