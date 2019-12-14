import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пограбить: PerfectVerb = {
  name: Word('пограбить', 4),
  singular1stPerson: Word('пограблю', 4),
  singular2ndPerson: Word('пограбишь', 4),
  singular3rdPerson: Word('пограбит', 4),
  plural1stPerson: Word('пограбим', 4),
  plural2ndPerson: Word('пограбите', 4),
  plural3rdPerson: Word('пограбят', 4),
  masculinePast: Word('пограбил', 4),
  femininePast: Word('пограбила', 4),
  neuterPast: Word('пограбило', 4),
  pluralPast: Word('пограбили', 4),
  imperativeInformal: Word('пограбь', 4),
  imperativeFormal: Word('пограбьте', 4),
  imperfect: [],
};

perfectVerbs.set(пограбить.name.text, пограбить);

export { пограбить };