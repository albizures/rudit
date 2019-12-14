import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проминаться: PerfectVerb = {
  name: Word('проминаться', 6),
  singular1stPerson: Word('проминаюсь', 6),
  singular2ndPerson: Word('проминаешься', 6),
  singular3rdPerson: Word('проминается', 6),
  plural1stPerson: Word('проминаемся', 6),
  plural2ndPerson: Word('проминаетесь', 6),
  plural3rdPerson: Word('проминаются', 6),
  masculinePast: Word('проминался', 6),
  femininePast: Word('проминалась', 6),
  neuterPast: Word('проминалось', 6),
  pluralPast: Word('проминались', 6),
  imperativeInformal: Word('проминайся', 6),
  imperativeFormal: Word('проминайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проминаться.name.text, проминаться);

export { проминаться };