import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топтаться: PerfectVerb = {
  name: Word('топтаться', 4),
  singular1stPerson: Word('топчусь', 4),
  singular2ndPerson: Word('топчешься', 1),
  singular3rdPerson: Word('топчется', 1),
  plural1stPerson: Word('топчемся', 1),
  plural2ndPerson: Word('топчетесь', 1),
  plural3rdPerson: Word('топчутся', 1),
  masculinePast: Word('топтался', 4),
  femininePast: Word('топталась', 4),
  neuterPast: Word('топталось', 4),
  pluralPast: Word('топтались', 4),
  imperativeInformal: Word('топчись', 4),
  imperativeFormal: Word('топчитесь', 4),
  imperfect: [],
};

perfectVerbs.set(топтаться.name.text, топтаться);

export { топтаться };