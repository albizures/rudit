import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрощаться: PerfectVerb = {
  name: Word('упрощаться', 5),
  singular1stPerson: Word('упрощаюсь', 5),
  singular2ndPerson: Word('упрощаешься', 5),
  singular3rdPerson: Word('упрощается', 5),
  plural1stPerson: Word('упрощаемся', 5),
  plural2ndPerson: Word('упрощаетесь', 5),
  plural3rdPerson: Word('упрощаются', 5),
  masculinePast: Word('упрощался', 5),
  femininePast: Word('упрощалась', 5),
  neuterPast: Word('упрощалось', 5),
  pluralPast: Word('упрощались', 5),
  imperativeInformal: Word('упрощайся', 5),
  imperativeFormal: Word('упрощайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(упрощаться.name.text, упрощаться);

export { упрощаться };