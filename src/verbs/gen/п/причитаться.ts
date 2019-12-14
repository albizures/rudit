import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причитаться: PerfectVerb = {
  name: Word('причитаться', 6),
  singular1stPerson: Word('причитаюсь', 6),
  singular2ndPerson: Word('причитаешься', 6),
  singular3rdPerson: Word('причитается', 6),
  plural1stPerson: Word('причитаемся', 6),
  plural2ndPerson: Word('причитаетесь', 6),
  plural3rdPerson: Word('причитаются', 6),
  masculinePast: Word('причитался', 6),
  femininePast: Word('причиталась', 6),
  neuterPast: Word('причиталось', 6),
  pluralPast: Word('причитались', 6),
  imperativeInformal: Word('причитайся', 6),
  imperativeFormal: Word('причитайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(причитаться.name.text, причитаться);

export { причитаться };