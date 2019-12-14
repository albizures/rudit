import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протолкаться: PerfectVerb = {
  name: Word('протолкаться', 7),
  singular1stPerson: Word('протолкаюсь', 7),
  singular2ndPerson: Word('протолкаешься', 7),
  singular3rdPerson: Word('протолкается', 7),
  plural1stPerson: Word('протолкаемся', 7),
  plural2ndPerson: Word('протолкаетесь', 7),
  plural3rdPerson: Word('протолкаются', 7),
  masculinePast: Word('протолкался', 7),
  femininePast: Word('протолкалась', 7),
  neuterPast: Word('протолкалось', 7),
  pluralPast: Word('протолкались', 7),
  imperativeInformal: Word('протолкайся', 7),
  imperativeFormal: Word('протолкайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(протолкаться.name.text, протолкаться);

export { протолкаться };