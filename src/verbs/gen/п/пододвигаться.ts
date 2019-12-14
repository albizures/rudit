import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пододвигаться: PerfectVerb = {
  name: Word('пододвигаться', 8),
  singular1stPerson: Word('пододвигаюсь', 8),
  singular2ndPerson: Word('пододвигаешься', 8),
  singular3rdPerson: Word('пододвигается', 8),
  plural1stPerson: Word('пододвигаемся', 8),
  plural2ndPerson: Word('пододвигаетесь', 8),
  plural3rdPerson: Word('пододвигаются', 8),
  masculinePast: Word('пододвигался', 8),
  femininePast: Word('пододвигалась', 8),
  neuterPast: Word('пододвигалось', 8),
  pluralPast: Word('пододвигались', 8),
  imperativeInformal: Word('пододвигайся', 8),
  imperativeFormal: Word('пододвигайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(пододвигаться.name.text, пододвигаться);

export { пододвигаться };