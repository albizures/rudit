import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приключаться: PerfectVerb = {
  name: Word('приключаться', 7),
  singular1stPerson: Word('приключаюсь', 7),
  singular2ndPerson: Word('приключаешься', 7),
  singular3rdPerson: Word('приключается', 7),
  plural1stPerson: Word('приключаемся', 7),
  plural2ndPerson: Word('приключаетесь', 7),
  plural3rdPerson: Word('приключаются', 7),
  masculinePast: Word('приключался', 7),
  femininePast: Word('приключалась', 7),
  neuterPast: Word('приключалось', 7),
  pluralPast: Word('приключались', 7),
  imperativeInformal: Word('приключайся', 7),
  imperativeFormal: Word('приключайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(приключаться.name.text, приключаться);

export { приключаться };