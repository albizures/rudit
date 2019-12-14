import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срабатываться: PerfectVerb = {
  name: Word('срабатываться', 4),
  singular1stPerson: Word('срабатываюсь', 4),
  singular2ndPerson: Word('срабатываешься', 4),
  singular3rdPerson: Word('срабатывается', 4),
  plural1stPerson: Word('срабатываемся', 4),
  plural2ndPerson: Word('срабатываетесь', 4),
  plural3rdPerson: Word('срабатываются', 4),
  masculinePast: Word('срабатывался', 4),
  femininePast: Word('срабатывалась', 4),
  neuterPast: Word('срабатывалось', 4),
  pluralPast: Word('срабатывались', 4),
  imperativeInformal: Word('срабатывайся', 4),
  imperativeFormal: Word('срабатывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(срабатываться.name.text, срабатываться);

export { срабатываться };