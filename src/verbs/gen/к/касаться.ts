import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const касаться: PerfectVerb = {
  name: Word('касаться', 3),
  singular1stPerson: Word('касаюсь', 3),
  singular2ndPerson: Word('касаешься', 3),
  singular3rdPerson: Word('касается', 3),
  plural1stPerson: Word('касаемся', 3),
  plural2ndPerson: Word('касаетесь', 3),
  plural3rdPerson: Word('касаются', 3),
  masculinePast: Word('касался', 3),
  femininePast: Word('касалась', 3),
  neuterPast: Word('касалось', 3),
  pluralPast: Word('касались', 3),
  imperativeInformal: Word('касайся', 3),
  imperativeFormal: Word('касайтесь', 3),
  imperfect: ['коснуться'],
};

perfectVerbs.set(касаться.name.text, касаться);

export { касаться };