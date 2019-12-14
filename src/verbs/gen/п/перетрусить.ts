import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетрусить: PerfectVerb = {
  name: Word('перетрусить', 6),
  singular1stPerson: Word('перетрушу', 6),
  singular2ndPerson: Word('перетрусишь', 6),
  singular3rdPerson: Word('перетрусит', 6),
  plural1stPerson: Word('перетрусим', 6),
  plural2ndPerson: Word('перетрусите', 6),
  plural3rdPerson: Word('перетрусят', 6),
  masculinePast: Word('перетрусил', 6),
  femininePast: Word('перетрусила', 6),
  neuterPast: Word('перетрусило', 6),
  pluralPast: Word('перетрусили', 6),
  imperativeInformal: Word('перетрусь', 6),
  imperativeFormal: Word('перетрусьте', 6),
  imperfect: [],
};

perfectVerbs.set(перетрусить.name.text, перетрусить);

export { перетрусить };