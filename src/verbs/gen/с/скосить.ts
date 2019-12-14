import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скосить: PerfectVerb = {
  name: Word('скосить', 4),
  singular1stPerson: Word('скошу', 4),
  singular2ndPerson: Word('скосишь', 2),
  singular3rdPerson: Word('скосит', 2),
  plural1stPerson: Word('скосим', 2),
  plural2ndPerson: Word('скосите', 2),
  plural3rdPerson: Word('скосят', 2),
  masculinePast: Word('скосил', 4),
  femininePast: Word('скосила', 4),
  neuterPast: Word('скосило', 4),
  pluralPast: Word('скосили', 4),
  imperativeInformal: Word('скоси', 4),
  imperativeFormal: Word('скосите', 4),
  imperfect: [],
};

perfectVerbs.set(скосить.name.text, скосить);

export { скосить };