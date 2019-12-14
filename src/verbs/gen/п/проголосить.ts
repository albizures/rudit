import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проголосить: PerfectVerb = {
  name: Word('проголосить', 8),
  singular1stPerson: Word('проголошу', 8),
  singular2ndPerson: Word('проголосишь', 8),
  singular3rdPerson: Word('проголосит', 8),
  plural1stPerson: Word('проголосим', 8),
  plural2ndPerson: Word('проголосите', 8),
  plural3rdPerson: Word('проголосят', 8),
  masculinePast: Word('проголосил', 8),
  femininePast: Word('проголосила', 8),
  neuterPast: Word('проголосило', 8),
  pluralPast: Word('проголосили', 8),
  imperativeInformal: Word('проголоси', 8),
  imperativeFormal: Word('проголосите', 8),
  imperfect: [],
};

perfectVerbs.set(проголосить.name.text, проголосить);

export { проголосить };