import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плескаться: PerfectVerb = {
  name: Word('плескаться', 5),
  singular1stPerson: Word('плещусь', 4),
  singular2ndPerson: Word('плещешься', 2),
  singular3rdPerson: Word('плещется', 2),
  plural1stPerson: Word('плещемся', 2),
  plural2ndPerson: Word('плещетесь', 2),
  plural3rdPerson: Word('плещутся', 2),
  masculinePast: Word('плескался', 5),
  femininePast: Word('плескалась', 5),
  neuterPast: Word('плескалось', 5),
  pluralPast: Word('плескались', 5),
  imperativeInformal: Word('плещись', 4),
  imperativeFormal: Word('плещитесь', 4),
  imperfect: [],
};

perfectVerbs.set(плескаться.name.text, плескаться);

export { плескаться };