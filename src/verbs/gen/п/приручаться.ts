import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приручаться: PerfectVerb = {
  name: Word('приручаться', 6),
  singular1stPerson: Word('приручаюсь', 6),
  singular2ndPerson: Word('приручаешься', 6),
  singular3rdPerson: Word('приручается', 6),
  plural1stPerson: Word('приручаемся', 6),
  plural2ndPerson: Word('приручаетесь', 6),
  plural3rdPerson: Word('приручаются', 6),
  masculinePast: Word('приручался', 6),
  femininePast: Word('приручалась', 6),
  neuterPast: Word('приручалось', 6),
  pluralPast: Word('приручались', 6),
  imperativeInformal: Word('приручайся', 6),
  imperativeFormal: Word('приручайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(приручаться.name.text, приручаться);

export { приручаться };