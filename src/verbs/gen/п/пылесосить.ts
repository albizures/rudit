import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пылесосить: PerfectVerb = {
  name: Word('пылесосить', 5),
  singular1stPerson: Word('пылесошу', 5),
  singular2ndPerson: Word('пылесосишь', 5),
  singular3rdPerson: Word('пылесосит', 5),
  plural1stPerson: Word('пылесосим', 5),
  plural2ndPerson: Word('пылесосите', 5),
  plural3rdPerson: Word('пылесосят', 5),
  masculinePast: Word('пылесосил', 5),
  femininePast: Word('пылесосила', 5),
  neuterPast: Word('пылесосило', 5),
  pluralPast: Word('пылесосили', 5),
  imperativeInformal: Word('пылесось', 5),
  imperativeFormal: Word('пылесосьте', 5),
  imperfect: [],
};

perfectVerbs.set(пылесосить.name.text, пылесосить);

export { пылесосить };