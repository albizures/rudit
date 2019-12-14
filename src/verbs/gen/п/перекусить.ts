import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекусить: PerfectVerb = {
  name: Word('перекусить', 7),
  singular1stPerson: Word('перекушу', 7),
  singular2ndPerson: Word('перекусишь', 5),
  singular3rdPerson: Word('перекусит', 5),
  plural1stPerson: Word('перекусим', 5),
  plural2ndPerson: Word('перекусите', 5),
  plural3rdPerson: Word('перекусят', 5),
  masculinePast: Word('перекусил', 7),
  femininePast: Word('перекусила', 7),
  neuterPast: Word('перекусило', 7),
  pluralPast: Word('перекусили', 7),
  imperativeInformal: Word('перекуси', 7),
  imperativeFormal: Word('перекусите', 7),
  imperfect: [],
};

perfectVerbs.set(перекусить.name.text, перекусить);

export { перекусить };