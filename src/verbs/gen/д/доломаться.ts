import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доломаться: PerfectVerb = {
  name: Word('доломаться', 5),
  singular1stPerson: Word('доломаюсь', 5),
  singular2ndPerson: Word('доломаешься', 5),
  singular3rdPerson: Word('доломается', 5),
  plural1stPerson: Word('доломаемся', 5),
  plural2ndPerson: Word('доломаетесь', 5),
  plural3rdPerson: Word('доломаются', 5),
  masculinePast: Word('доломался', 5),
  femininePast: Word('доломалась', 5),
  neuterPast: Word('доломалось', 5),
  pluralPast: Word('доломались', 5),
  imperativeInformal: Word('доломайся', 5),
  imperativeFormal: Word('доломайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(доломаться.name.text, доломаться);

export { доломаться };