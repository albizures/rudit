import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const описываться: PerfectVerb = {
  name: Word('описываться', 2),
  singular1stPerson: Word('описываюсь', 2),
  singular2ndPerson: Word('описываешься', 2),
  singular3rdPerson: Word('описывается', 2),
  plural1stPerson: Word('описываемся', 2),
  plural2ndPerson: Word('описываетесь', 2),
  plural3rdPerson: Word('описываются', 2),
  masculinePast: Word('описывался', 2),
  femininePast: Word('описывалась', 2),
  neuterPast: Word('описывалось', 2),
  pluralPast: Word('описывались', 2),
  imperativeInformal: Word('описывайся', 2),
  imperativeFormal: Word('описывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(описываться.name.text, описываться);

export { описываться };