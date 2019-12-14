import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресытить: PerfectVerb = {
  name: Word('пресытить', 4),
  singular1stPerson: Word('пресыщу', 4),
  singular2ndPerson: Word('пресытишь', 4),
  singular3rdPerson: Word('пресытит', 4),
  plural1stPerson: Word('пресытим', 4),
  plural2ndPerson: Word('пресытите', 4),
  plural3rdPerson: Word('пресытят', 4),
  masculinePast: Word('пресытил', 4),
  femininePast: Word('пресытила', 4),
  neuterPast: Word('пресытило', 4),
  pluralPast: Word('пресытили', 4),
  imperativeInformal: Word('пресыть', 4),
  imperativeFormal: Word('пресытьте', 4),
  imperfect: [],
};

perfectVerbs.set(пресытить.name.text, пресытить);

export { пресытить };