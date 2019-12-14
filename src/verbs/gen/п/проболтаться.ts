import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проболтаться: PerfectVerb = {
  name: Word('проболтаться', 7),
  singular1stPerson: Word('проболтаюсь', 7),
  singular2ndPerson: Word('проболтаешься', 7),
  singular3rdPerson: Word('проболтается', 7),
  plural1stPerson: Word('проболтаемся', 7),
  plural2ndPerson: Word('проболтаетесь', 7),
  plural3rdPerson: Word('проболтаются', 7),
  masculinePast: Word('проболтался', 7),
  femininePast: Word('проболталась', 7),
  neuterPast: Word('проболталось', 7),
  pluralPast: Word('проболтались', 7),
  imperativeInformal: Word('проболтайся', 7),
  imperativeFormal: Word('проболтайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(проболтаться.name.text, проболтаться);

export { проболтаться };