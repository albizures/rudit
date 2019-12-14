import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекосить: PerfectVerb = {
  name: Word('перекосить', 7),
  singular1stPerson: Word('перекошу', 7),
  singular2ndPerson: Word('перекосишь', 5),
  singular3rdPerson: Word('перекосит', 5),
  plural1stPerson: Word('перекосим', 5),
  plural2ndPerson: Word('перекосите', 5),
  plural3rdPerson: Word('перекосят', 5),
  masculinePast: Word('перекосил', 7),
  femininePast: Word('перекосила', 7),
  neuterPast: Word('перекосило', 7),
  pluralPast: Word('перекосили', 7),
  imperativeInformal: Word('перекоси', 7),
  imperativeFormal: Word('перекосите', 7),
  imperfect: [],
};

perfectVerbs.set(перекосить.name.text, перекосить);

export { перекосить };