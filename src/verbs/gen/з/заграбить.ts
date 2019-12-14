import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заграбить: PerfectVerb = {
  name: Word('заграбить', 4),
  singular1stPerson: Word('заграблю', 4),
  singular2ndPerson: Word('заграбишь', 4),
  singular3rdPerson: Word('заграбит', 4),
  plural1stPerson: Word('заграбим', 4),
  plural2ndPerson: Word('заграбите', 4),
  plural3rdPerson: Word('заграбят', 4),
  masculinePast: Word('заграбил', 4),
  femininePast: Word('заграбила', 4),
  neuterPast: Word('заграбило', 4),
  pluralPast: Word('заграбили', 4),
  imperativeInformal: Word('заграбь', 4),
  imperativeFormal: Word('заграбьте', 4),
  imperfect: [],
};

perfectVerbs.set(заграбить.name.text, заграбить);

export { заграбить };