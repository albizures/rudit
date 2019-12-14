import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскосить: PerfectVerb = {
  name: Word('раскосить', 6),
  singular1stPerson: Word('раскошу', 6),
  singular2ndPerson: Word('раскосишь', 4),
  singular3rdPerson: Word('раскосит', 4),
  plural1stPerson: Word('раскосим', 4),
  plural2ndPerson: Word('раскосите', 4),
  plural3rdPerson: Word('раскосят', 4),
  masculinePast: Word('раскосил', 6),
  femininePast: Word('раскосила', 6),
  neuterPast: Word('раскосило', 6),
  pluralPast: Word('раскосили', 6),
  imperativeInformal: Word('раскоси', 6),
  imperativeFormal: Word('раскосите', 6),
  imperfect: [],
};

perfectVerbs.set(раскосить.name.text, раскосить);

export { раскосить };