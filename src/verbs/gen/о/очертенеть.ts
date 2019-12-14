import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очертенеть: PerfectVerb = {
  name: Word('очертенеть', 7),
  singular1stPerson: Word('очертенею', 7),
  singular2ndPerson: Word('очертенеешь', 7),
  singular3rdPerson: Word('очертенеет', 7),
  plural1stPerson: Word('очертенеем', 7),
  plural2ndPerson: Word('очертенеете', 7),
  plural3rdPerson: Word('очертенеют', 7),
  masculinePast: Word('очертенел', 7),
  femininePast: Word('очертенела', 7),
  neuterPast: Word('очертенело', 7),
  pluralPast: Word('очертенели', 7),
  imperativeInformal: Word('очертеней', 7),
  imperativeFormal: Word('очертенейте', 7),
  imperfect: [],
};

perfectVerbs.set(очертенеть.name.text, очертенеть);

export { очертенеть };