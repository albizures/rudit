import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утечь: PerfectVerb = {
  name: Word('утечь', 2),
  singular1stPerson: Word('утеку', 4),
  singular2ndPerson: Word('утечёшь', 2),
  singular3rdPerson: Word('утечёт', 2),
  plural1stPerson: Word('утечём', 2),
  plural2ndPerson: Word('утечёте', 2),
  plural3rdPerson: Word('утекут', 4),
  masculinePast: Word('утёк', 0),
  femininePast: Word('утекла', 5),
  neuterPast: Word('утекло', 5),
  pluralPast: Word('утекли', 5),
  imperativeInformal: Word('утеки', 4),
  imperativeFormal: Word('утеките', 4),
  imperfect: [],
};

perfectVerbs.set(утечь.name.text, утечь);

export { утечь };