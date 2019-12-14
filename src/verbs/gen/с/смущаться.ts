import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смущаться: PerfectVerb = {
  name: Word('смущаться', 4),
  singular1stPerson: Word('смущаюсь', 4),
  singular2ndPerson: Word('смущаешься', 4),
  singular3rdPerson: Word('смущается', 4),
  plural1stPerson: Word('смущаемся', 4),
  plural2ndPerson: Word('смущаетесь', 4),
  plural3rdPerson: Word('смущаются', 4),
  masculinePast: Word('смущался', 4),
  femininePast: Word('смущалась', 4),
  neuterPast: Word('смущалось', 4),
  pluralPast: Word('смущались', 4),
  imperativeInformal: Word('смущайся', 4),
  imperativeFormal: Word('смущайтесь', 4),
  imperfect: ['смутиться'],
};

perfectVerbs.set(смущаться.name.text, смущаться);

export { смущаться };