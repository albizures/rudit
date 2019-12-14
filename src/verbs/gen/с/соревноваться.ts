import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соревноваться: PerfectVerb = {
  name: Word('соревноваться', 8),
  singular1stPerson: Word('соревноваюсь', 8),
  singular2ndPerson: Word('соревноваешься', 8),
  singular3rdPerson: Word('соревновается', 8),
  plural1stPerson: Word('соревноваемся', 8),
  plural2ndPerson: Word('соревноваетесь', 8),
  plural3rdPerson: Word('соревноваются', 8),
  masculinePast: Word('соревновался', 8),
  femininePast: Word('соревновалась', 8),
  neuterPast: Word('соревновалось', 8),
  pluralPast: Word('соревновались', 8),
  imperativeInformal: Word('соревновайся', 8),
  imperativeFormal: Word('соревновайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(соревноваться.name.text, соревноваться);

export { соревноваться };