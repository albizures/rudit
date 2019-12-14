import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обознаться: PerfectVerb = {
  name: Word('обознаться', 5),
  singular1stPerson: Word('обознаюсь', 5),
  singular2ndPerson: Word('обознаешься', 5),
  singular3rdPerson: Word('обознается', 5),
  plural1stPerson: Word('обознаемся', 5),
  plural2ndPerson: Word('обознаетесь', 5),
  plural3rdPerson: Word('обознаются', 5),
  masculinePast: Word('обознался', 5),
  femininePast: Word('обозналась', 5),
  neuterPast: Word('обозналось', 5),
  pluralPast: Word('обознались', 5),
  imperativeInformal: Word('обознайся', 5),
  imperativeFormal: Word('обознайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обознаться.name.text, обознаться);

export { обознаться };