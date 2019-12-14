import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засинеть: PerfectVerb = {
  name: Word('засинеть', 5),
  singular1stPerson: Word('засинею', 5),
  singular2ndPerson: Word('засинеешь', 5),
  singular3rdPerson: Word('засинеет', 5),
  plural1stPerson: Word('засинеем', 5),
  plural2ndPerson: Word('засинеете', 5),
  plural3rdPerson: Word('засинеют', 5),
  masculinePast: Word('засинел', 5),
  femininePast: Word('засинела', 5),
  neuterPast: Word('засинело', 5),
  pluralPast: Word('засинели', 5),
  imperativeInformal: Word('засиней', 5),
  imperativeFormal: Word('засинейте', 5),
  imperfect: [],
};

perfectVerbs.set(засинеть.name.text, засинеть);

export { засинеть };