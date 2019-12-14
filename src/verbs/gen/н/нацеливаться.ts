import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацеливаться: PerfectVerb = {
  name: Word('нацеливаться', 3),
  singular1stPerson: Word('нацеливаюсь', 3),
  singular2ndPerson: Word('нацеливаешься', 3),
  singular3rdPerson: Word('нацеливается', 3),
  plural1stPerson: Word('нацеливаемся', 3),
  plural2ndPerson: Word('нацеливаетесь', 3),
  plural3rdPerson: Word('нацеливаются', 3),
  masculinePast: Word('нацеливался', 3),
  femininePast: Word('нацеливалась', 3),
  neuterPast: Word('нацеливалось', 3),
  pluralPast: Word('нацеливались', 3),
  imperativeInformal: Word('нацеливайся', 3),
  imperativeFormal: Word('нацеливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нацеливаться.name.text, нацеливаться);

export { нацеливаться };