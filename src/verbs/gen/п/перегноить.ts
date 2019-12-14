import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегноить: PerfectVerb = {
  name: Word('перегноить', 7),
  singular1stPerson: Word('перегною', 7),
  singular2ndPerson: Word('перегноишь', 7),
  singular3rdPerson: Word('перегноит', 7),
  plural1stPerson: Word('перегноим', 7),
  plural2ndPerson: Word('перегноите', 7),
  plural3rdPerson: Word('перегноят', 7),
  masculinePast: Word('перегноил', 7),
  femininePast: Word('перегноила', 7),
  neuterPast: Word('перегноило', 7),
  pluralPast: Word('перегноили', 7),
  imperativeInformal: Word('перегнои', 7),
  imperativeFormal: Word('перегноите', 7),
  imperfect: [],
};

perfectVerbs.set(перегноить.name.text, перегноить);

export { перегноить };