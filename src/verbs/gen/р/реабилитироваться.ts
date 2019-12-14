import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реабилитироваться: PerfectVerb = {
  name: Word('реабилитироваться', 8),
  singular1stPerson: Word('реабилитируюсь', 8),
  singular2ndPerson: Word('реабилитируешься', 8),
  singular3rdPerson: Word('реабилитируется', 8),
  plural1stPerson: Word('реабилитируемся', 8),
  plural2ndPerson: Word('реабилитируетесь', 8),
  plural3rdPerson: Word('реабилитируются', 8),
  masculinePast: Word('реабилитировался', 8),
  femininePast: Word('реабилитировалась', 8),
  neuterPast: Word('реабилитировалось', 8),
  pluralPast: Word('реабилитировались', 8),
  imperativeInformal: Word('реабилитируйся', 8),
  imperativeFormal: Word('реабилитируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(реабилитироваться.name.text, реабилитироваться);

export { реабилитироваться };