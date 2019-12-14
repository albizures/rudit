import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воображаться: PerfectVerb = {
  name: Word('воображаться', 7),
  singular1stPerson: Word('воображаюсь', 7),
  singular2ndPerson: Word('воображаешься', 7),
  singular3rdPerson: Word('воображается', 7),
  plural1stPerson: Word('воображаемся', 7),
  plural2ndPerson: Word('воображаетесь', 7),
  plural3rdPerson: Word('воображаются', 7),
  masculinePast: Word('воображался', 7),
  femininePast: Word('воображалась', 7),
  neuterPast: Word('воображалось', 7),
  pluralPast: Word('воображались', 7),
  imperativeInformal: Word('воображайся', 7),
  imperativeFormal: Word('воображайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(воображаться.name.text, воображаться);

export { воображаться };