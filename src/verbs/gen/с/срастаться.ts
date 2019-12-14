import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срастаться: PerfectVerb = {
  name: Word('срастаться', 5),
  singular1stPerson: Word('срастаюсь', 5),
  singular2ndPerson: Word('срастаешься', 5),
  singular3rdPerson: Word('срастается', 5),
  plural1stPerson: Word('срастаемся', 5),
  plural2ndPerson: Word('срастаетесь', 5),
  plural3rdPerson: Word('срастаются', 5),
  masculinePast: Word('срастался', 5),
  femininePast: Word('срасталась', 5),
  neuterPast: Word('срасталось', 5),
  pluralPast: Word('срастались', 5),
  imperativeInformal: Word('срастайся', 5),
  imperativeFormal: Word('срастайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(срастаться.name.text, срастаться);

export { срастаться };