import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ласкаться: PerfectVerb = {
  name: Word('ласкаться', 4),
  singular1stPerson: Word('ласкаюсь', 4),
  singular2ndPerson: Word('ласкаешься', 4),
  singular3rdPerson: Word('ласкается', 4),
  plural1stPerson: Word('ласкаемся', 4),
  plural2ndPerson: Word('ласкаетесь', 4),
  plural3rdPerson: Word('ласкаются', 4),
  masculinePast: Word('ласкался', 4),
  femininePast: Word('ласкалась', 4),
  neuterPast: Word('ласкалось', 4),
  pluralPast: Word('ласкались', 4),
  imperativeInformal: Word('ласкайся', 4),
  imperativeFormal: Word('ласкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ласкаться.name.text, ласкаться);

export { ласкаться };