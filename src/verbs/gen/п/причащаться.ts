import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причащаться: PerfectVerb = {
  name: Word('причащаться', 6),
  singular1stPerson: Word('причащаюсь', 6),
  singular2ndPerson: Word('причащаешься', 6),
  singular3rdPerson: Word('причащается', 6),
  plural1stPerson: Word('причащаемся', 6),
  plural2ndPerson: Word('причащаетесь', 6),
  plural3rdPerson: Word('причащаются', 6),
  masculinePast: Word('причащался', 6),
  femininePast: Word('причащалась', 6),
  neuterPast: Word('причащалось', 6),
  pluralPast: Word('причащались', 6),
  imperativeInformal: Word('причащайся', 6),
  imperativeFormal: Word('причащайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(причащаться.name.text, причащаться);

export { причащаться };