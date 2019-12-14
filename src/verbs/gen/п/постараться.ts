import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постараться: PerfectVerb = {
  name: Word('постараться', 6),
  singular1stPerson: Word('постараюсь', 6),
  singular2ndPerson: Word('постараешься', 6),
  singular3rdPerson: Word('постарается', 6),
  plural1stPerson: Word('постараемся', 6),
  plural2ndPerson: Word('постараетесь', 6),
  plural3rdPerson: Word('постараются', 6),
  masculinePast: Word('постарался', 6),
  femininePast: Word('постаралась', 6),
  neuterPast: Word('постаралось', 6),
  pluralPast: Word('постарались', 6),
  imperativeInformal: Word('постарайся', 6),
  imperativeFormal: Word('постарайтесь', 6),
  imperfect: ['стараться'],
};

perfectVerbs.set(постараться.name.text, постараться);

export { постараться };