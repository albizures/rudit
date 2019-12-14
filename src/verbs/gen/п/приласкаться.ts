import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приласкаться: PerfectVerb = {
  name: Word('приласкаться', 7),
  singular1stPerson: Word('приласкаюсь', 7),
  singular2ndPerson: Word('приласкаешься', 7),
  singular3rdPerson: Word('приласкается', 7),
  plural1stPerson: Word('приласкаемся', 7),
  plural2ndPerson: Word('приласкаетесь', 7),
  plural3rdPerson: Word('приласкаются', 7),
  masculinePast: Word('приласкался', 7),
  femininePast: Word('приласкалась', 7),
  neuterPast: Word('приласкалось', 7),
  pluralPast: Word('приласкались', 7),
  imperativeInformal: Word('приласкайся', 7),
  imperativeFormal: Word('приласкайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(приласкаться.name.text, приласкаться);

export { приласкаться };