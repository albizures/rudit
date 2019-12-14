import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размягчаться: PerfectVerb = {
  name: Word('размягчаться', 7),
  singular1stPerson: Word('размягчаюсь', 7),
  singular2ndPerson: Word('размягчаешься', 7),
  singular3rdPerson: Word('размягчается', 7),
  plural1stPerson: Word('размягчаемся', 7),
  plural2ndPerson: Word('размягчаетесь', 7),
  plural3rdPerson: Word('размягчаются', 7),
  masculinePast: Word('размягчался', 7),
  femininePast: Word('размягчалась', 7),
  neuterPast: Word('размягчалось', 7),
  pluralPast: Word('размягчались', 7),
  imperativeInformal: Word('размягчайся', 7),
  imperativeFormal: Word('размягчайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(размягчаться.name.text, размягчаться);

export { размягчаться };