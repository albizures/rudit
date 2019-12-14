import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потолкаться: PerfectVerb = {
  name: Word('потолкаться', 6),
  singular1stPerson: Word('потолкаюсь', 6),
  singular2ndPerson: Word('потолкаешься', 6),
  singular3rdPerson: Word('потолкается', 6),
  plural1stPerson: Word('потолкаемся', 6),
  plural2ndPerson: Word('потолкаетесь', 6),
  plural3rdPerson: Word('потолкаются', 6),
  masculinePast: Word('потолкался', 6),
  femininePast: Word('потолкалась', 6),
  neuterPast: Word('потолкалось', 6),
  pluralPast: Word('потолкались', 6),
  imperativeInformal: Word('потолкайся', 6),
  imperativeFormal: Word('потолкайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(потолкаться.name.text, потолкаться);

export { потолкаться };