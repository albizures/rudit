import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поголосить: PerfectVerb = {
  name: Word('поголосить', 7),
  singular1stPerson: Word('поголошу', 7),
  singular2ndPerson: Word('поголосишь', 7),
  singular3rdPerson: Word('поголосит', 7),
  plural1stPerson: Word('поголосим', 7),
  plural2ndPerson: Word('поголосите', 7),
  plural3rdPerson: Word('поголосят', 7),
  masculinePast: Word('поголосил', 7),
  femininePast: Word('поголосила', 7),
  neuterPast: Word('поголосило', 7),
  pluralPast: Word('поголосили', 7),
  imperativeInformal: Word('поголоси', 7),
  imperativeFormal: Word('поголосите', 7),
  imperfect: [],
};

perfectVerbs.set(поголосить.name.text, поголосить);

export { поголосить };