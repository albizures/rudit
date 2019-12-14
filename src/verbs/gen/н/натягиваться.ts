import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натягиваться: PerfectVerb = {
  name: Word('натягиваться', 3),
  singular1stPerson: Word('натягиваюсь', 3),
  singular2ndPerson: Word('натягиваешься', 3),
  singular3rdPerson: Word('натягивается', 3),
  plural1stPerson: Word('натягиваемся', 3),
  plural2ndPerson: Word('натягиваетесь', 3),
  plural3rdPerson: Word('натягиваются', 3),
  masculinePast: Word('натягивался', 3),
  femininePast: Word('натягивалась', 3),
  neuterPast: Word('натягивалось', 3),
  pluralPast: Word('натягивались', 3),
  imperativeInformal: Word('натягивайся', 3),
  imperativeFormal: Word('натягивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(натягиваться.name.text, натягиваться);

export { натягиваться };